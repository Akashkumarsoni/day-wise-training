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
    company2: {
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
  const recFunc = (obj, prev = "") => {
    for (let key in obj) {
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        let restPart = "";
        if (prev === "") {
          restPart = key + "";
        } else {
          restPart = prev + "." + key + "";
        }
        recFunc(obj[key], restPart);
      } else if (
        typeof obj[key] === "string" ||
        typeof obj[key] === "boolean" ||
        typeof obj[key] === "number"
      ) {
        console.log('"', prev, ".", key, '":', obj[key]);
      } else {
        console.log('"', prev, ".", key, '":', obj[key]);
      }
    }
  };
  recFunc(person);
  return <></>;
};
