module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // "off" or 0      -> 규칙을 해제
    // "warn" or 1   ->규칙을 경고로 설정합니다(종료 코드에는 영향을 주지 않음).
    // "error" or 2  ->규칙을 오류로 설정합니다(종료 코드는 1임).
    "no-unused-vars": "off", // 미사용변수
    "no-console": "off", // console
    semi: "warn", // 세미콜론
  },
};
