import AsyncStorage from '@react-native-async-storage/async-storage';

const pshskylinetwrrsSavedKey = 'pshskylinetwrrs_saved_facades_v1';

const pshskylinetwrrsparse = (pshskylinetwrrsraw: string | null): string[] => {
  if (!pshskylinetwrrsraw) {
    return [];
  }
  try {
    const pshskylinetwrrsparsed = JSON.parse(pshskylinetwrrsraw);
    if (Array.isArray(pshskylinetwrrsparsed)) {
      return pshskylinetwrrsparsed.filter((pshskylinetwrrsid): pshskylinetwrrsid is string => typeof pshskylinetwrrsid === 'string');
    }
    return [];
  } catch {
    return [];
  }
};

export async function pshskylinetwrrsGetSavedIds(): Promise<Set<string>> {
  const pshskylinetwrrsraw = await AsyncStorage.getItem(pshskylinetwrrsSavedKey);
  return new Set(pshskylinetwrrsparse(pshskylinetwrrsraw));
}

export async function pshskylinetwrrsIsSaved(pshskylinetwrrsid: string): Promise<boolean> {
  const pshskylinetwrrssaved = await pshskylinetwrrsGetSavedIds();
  return pshskylinetwrrssaved.has(pshskylinetwrrsid);
}

export async function pshskylinetwrrsSetSaved(pshskylinetwrrsid: string, pshskylinetwrrssaved: boolean): Promise<boolean> {
  const pshskylinetwrrsset = await pshskylinetwrrsGetSavedIds();
  if (pshskylinetwrrssaved) {
    pshskylinetwrrsset.add(pshskylinetwrrsid);
  } else {
    pshskylinetwrrsset.delete(pshskylinetwrrsid);
  }
  await AsyncStorage.setItem(pshskylinetwrrsSavedKey, JSON.stringify(Array.from(pshskylinetwrrsset)));
  return pshskylinetwrrsset.has(pshskylinetwrrsid);
}

export async function pshskylinetwrrsToggleSaved(pshskylinetwrrsid: string): Promise<boolean> {
  const pshskylinetwrrsset = await pshskylinetwrrsGetSavedIds();
  if (pshskylinetwrrsset.has(pshskylinetwrrsid)) {
    pshskylinetwrrsset.delete(pshskylinetwrrsid);
  } else {
    pshskylinetwrrsset.add(pshskylinetwrrsid);
  }
  await AsyncStorage.setItem(pshskylinetwrrsSavedKey, JSON.stringify(Array.from(pshskylinetwrrsset)));
  return pshskylinetwrrsset.has(pshskylinetwrrsid);
}

