 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  test('test function',()=>{
    expect(2).toBe(2)
  })

  test("firstname should be a patten",()=>{
    expect(testData.firstName).toBe("Patten");
  })

  //describe block to group tests
  describe("formatTitle test",()=>{
    test("formatTitle should return a string",()=>{
      let formattedTitle = formatTitle(testData.title);
      expect(typeof formattedTitle).toBe('string')
    })
    test("formatTitle should format title correctly",()=>{
      let formattedTitle=formatTitle(testData.title)
      expect(formattedTitle).toBe("Nulla Ac")
    })
  })

  describe("shortenBio tests",()=>{
    test("shortenBio should return smaller bio string",()=>{
      let shortBio = shortenBio(testData.bio);
      expect(shortBio.length).toBeLessThan(testData.bio.length);
      //can write like expect(shortBio.length).not.toBeGreaterThan(testData.bio.length)
    })
    test("shortenBio should add .. in line",()=>{
      let shortBio = shortenBio(testData.bio);
      expect(shortBio).toContain("...");
    })
  })

  describe("convertLength tests",()=>{
    let result = convertLength(testData.length)
    let result2 = convertLength(30); 

    test('convertLength should return array with two elements',()=>expect(result).toHaveLength(2))

    test("convert can handle numbers less than 60",()=>expect(result2[1]).toEqual(30))
  })


//example to show difference between toBe and toEqual

describe("toBE vs toEqual", () => {
  test("toBe", () => {
    const myObj = { myNUm: 4 };
    const myObjTwo = { myNUm: 4 };
    expect(myObj).toBe(myObjTwo);
  });

  test("toEqual", () => {
    const myObj = { myNUm: 4 };
    const myObjTwo = { myNUm: 4 };
    expect(myObj).toEqual(myObjTwo);
  });
});