import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "../src/isArray.ts";

Deno.test("isArray", () => {
    assertEquals(_.isArray([1,2,3,4,5]),true)
    assertEquals(_.isArray(['a', 'b', 'c', 'd']), true)
    // assertEquals(_.isArray("1234"),false )
  })