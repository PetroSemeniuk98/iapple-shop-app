import styles from "../styles/TestFlexProp.module.css";

const TestFlexProp = () => {
  // let nameUser = prompt("What your names", "");
  // let ageUser = +prompt("How old are you?", "");
  // let conf = window.confirm("Are you sure you wish to delete this item?");

  // let myUser;
  // if (
  //   nameUser === "Petro" ||
  //   nameUser === "Solomia" ||
  //   nameUser === "Peter"
  // ) {
  //   myUser = function user(name, age, status) {
  //     return { name, age, status };
  //   };
  // } else {
  //   alert("User not Found!");
  // }

  // let user = myUser(nameUser, ageUser, conf);

  // console.log(user);

  // function marry(man, women) {
  //   women.husbend = man;
  //   man.wife = women;

  //   return { father: man, mother: women };
  // }
  // let family = marry({ name: "Petro" }, { name: "Solomia" });

  // console.log(family);
  // let salary = {
  //   petro: 29255.05,
  //   tanya: 29310.1,
  //   orest: 28473.5,
  //   bonus: {
  //     petroBonus: 2600,
  //     olyaBonus: 2500,
  //   },
  // };

  // function f(obj) {
  //   let sum = 0;
  //   let bon = 0;

  //   for (let key in obj) {
  //     if (typeof obj[key] === "number") sum += obj[key];
  //   }

  //   for (let key in obj) {
  //     if (typeof obj[key] === "object") {
  //       for (let bkey in obj[key]) {
  //         bon += obj[key][bkey];
  //       }
  //     }
  //   }

  //   return { sum, bon };
  // }

  // console.log(f(salary));

  // let value = +prompt("Value", 0);

  const arrUsers = [
    { name: "Petro", isloading: true },
    { name: "Oliver", isloading: true },
    { name: "Solomia", isloading: false },
    { name: "Oleh", isloading: false },
    { name: "Maria", isloading: false },
    { name: "Volodya", isloading: true },
    { name: "Natalia", isloading: true },
  ];
  // const newArr = arrUsers.splice(0, 4);

  function filterUsersByTypeBoolean(array) {
    const usersTrues = [];

    for (let i = 0; i < array.length; i++) {
      if (!array[i].isloading) {
        usersTrues.push(array[i]);
        array.splice(i, 1);
        i--;
      }
    }
    return usersTrues;
  }

  let result = filterUsersByTypeBoolean(arrUsers);
  console.log(result);
  // console.log(newArr);

  const id = Symbol("id");

  return (
    <div className={styles.flex}>
      <div className={styles.item}>Item1 </div>
      <div className={styles.item}>Item2</div>s
      <div className={styles.border} id={styles["no-border"]}>
        <p className={styles.text}>Petro Semeniuk</p>
      </div>
    </div>
  );
};

export { TestFlexProp };
