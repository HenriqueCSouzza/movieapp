export async function readableStreamToString(
  readableStream: ReadableStream<Uint8Array> | null
) {
  if (readableStream !== null) {
    try {
      const reader = readableStream.getReader();
      const { value, done } = await reader.read();
      if (!done && value) {
        const dadaProcess = new TextDecoder().decode(value);
        return JSON.parse(dadaProcess);
      } else {
        return readableStream;
      }
    } catch (error) {
      return readableStream;
    }
  }
}
