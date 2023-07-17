import { merge } from "../src/merge";
import { expect } from "chai";

describe("merge", () => {
  it('two array should be sort', () => {
    const collection_1 = [0, 2, 4, 6, 8, 10]
    const collection_2 = [1, 3, 5, 7, 9, 11]
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    expect(merge(collection_1, collection_2)).to.deep.equal(expected)
  })

  it('two array should be merge when one array is empty', () => {
    const collection_1: number[] = []
    const collection_2 = [0, 1, 5, 9]
    const expected = [0, 1, 5, 9]
    expect(merge(collection_1, collection_2)).to.deep.equal(expected)
  })

  it('two array should be sort when different size array', () => {
    const collection_1 = [1, 3, 5, 7]
    const collection_2 = [0, 2, 4, 6, 8]
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    expect(merge(collection_1, collection_2)).to.deep.equal(expected)
  })
})