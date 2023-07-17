# Typescript project with unit test

# Project Setup

### 1. Install dependencies for Unit Tests Project

```bash
# npm
npm install
```

### 2. To execute code unit tests (การใช้งาน unit tests sort array)

\*ในการ test ว่า 2 array นี้ sort กันไหม

```ts
it("set title here", () => {
  const your_array = [YOUR_ELEMENT];
  const your_array = [YOUR_ELEMENT];
  const your_expected = [YOUR_ELEMENT_EXPECT];
  expect(merge(your_array, your_array)).to.deep.equal(your_expected);
});
```

\*ตัวอย่างวิธีการใช้ unit tests การ sort 2 array

```ts
it("two array should be sort when has duplicate element", () => {
  const collection_1 = [1, 3, 5];
  const collection_2 = [0, 2, 4, 5];
  const expected = [0, 1, 2, 3, 4, 5, 5];
  expect(merge(collection_1, collection_2)).to.deep.equal(expected);
});
```

### 3. Start unit tests (คำสั่งรัน unit tests)

```bash
# unit test
npm test
```
