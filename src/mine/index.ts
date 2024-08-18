import { checkHashWithPrefix } from "../checkHashWithPrefix";
import { computeHash } from "../sha256";

export const mineWithPrefix = (prefix: string, inputString: string = '') => {
  let currNonceValue = 2274881; // saving some time :P
  let currHashValue = '';

  while (!checkHashWithPrefix(currHashValue, prefix)) {
    currHashValue = computeHash(inputString + currNonceValue.toString());
    console.log("trying nonce:", currNonceValue, "hash:", currHashValue);
    currNonceValue++;
  }

  currNonceValue--;

  console.log('\nnonce found: ', currNonceValue);
  if (inputString !== '') console.log('input string:', inputString + currNonceValue.toString());
  console.log('hash found:', currHashValue);
};