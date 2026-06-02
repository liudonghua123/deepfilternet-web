import { openDB, IDBPDatabase } from 'idb'

const DB_NAME = 'deepfilternet-models'
const STORE_NAME = 'models'
const DB_VERSION = 1

interface ModelRecord {
  id: string
  data: ArrayBuffer
  createdAt: number
}

let dbPromise: Promise<IDBPDatabase> | null = null

function getDb(): Promise<IDBPDatabase> {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' })
        }
      },
    })
  }
  return dbPromise
}

export async function getCachedModel(modelId: string): Promise<ArrayBuffer | null> {
  try {
    const db = await getDb()
    const record = await db.get(STORE_NAME, modelId) as ModelRecord | undefined
    return record?.data ?? null
  } catch {
    return null
  }
}

export async function cacheModel(modelId: string, data: ArrayBuffer): Promise<void> {
  const db = await getDb()
  const record: ModelRecord = {
    id: modelId,
    data,
    createdAt: Date.now(),
  }
  await db.put(STORE_NAME, record)
}

export async function clearModelCache(): Promise<void> {
  const db = await getDb()
  await db.clear(STORE_NAME)
}

export function getCacheSize(): number {
  // Estimate based on IndexedDB storage
  return 0 // Will be computed dynamically
}