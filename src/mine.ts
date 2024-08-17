import { computeHash } from "./sha256";

const checkHashWithLeadingFiveZeros = (s: string) => {
  if (s[0] === s[1] && s[1] === s[2] && s[2] === s[3] && s[3] === s[4] && s[4] === '0') return true;
  return false;
}

let currNonceValue = 300000; // skipping some value to save time :P

const mine = () => {
  while (!checkHashWithLeadingFiveZeros(computeHash(currNonceValue.toString()))) {
    currNonceValue = currNonceValue + 1;
    console.log('trying nonce:', currNonceValue, computeHash(currNonceValue.toString()));
  }
}

mine()

console.log('\nNonce Found:', currNonceValue, '\nHashed String:', computeHash(currNonceValue.toString()));