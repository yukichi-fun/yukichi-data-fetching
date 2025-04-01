import { fetchAllTokenInfos } from "./functions/fetchAllTokenInfos";

async function main() {
  // estimate time to run
  const start = Date.now();
  await fetchAllTokenInfos();
  console.log(`Time to run: ${Date.now() - start}ms`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
