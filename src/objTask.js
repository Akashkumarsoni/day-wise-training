export const ObjTask = () => {
  let person = {
    name: {
      firstName: "vishal",
      lastName: "singh",
    },
    company: {
      previousCompany: ["Flipkart", "Microsoft"],
      currentCompany: "cedcoss",
      nextCompanies: ["Meta", "Google"],
    },
    company11: {
      previousCompany11: ["Flipkart", "Microsoft"],
      currentCompany11: "cedcoss",
      nextCompanies11: ["Meta", "Google"],
      company161: {
        previousCompany181: ["Flipkart", "Microsoft"],
        currentCompany181: "cedcoss",
        nextCompanies811: ["Meta", "Google"],
      },
    },
    age: 25,
    age234: 25324,
    skills: ["React", "php"],
  };
  for (let i in person) {
    if (typeof person[i] === "object" && !Array.isArray(person[i])) {
      Object.keys(person[i]).map(j=>{
        console.log('"'+i+'.'+j+'":'+person[i][j])
      })
    } else if (
      typeof person[i] === "string" ||
      typeof person[i] === "boolean" ||
      typeof person[i] === "number"
    ) {
      console.log('"', i, '":', person[i]);
    } else {
      console.log('"', i, '":', person[i]);
    }
  }
  return <></>;
};
