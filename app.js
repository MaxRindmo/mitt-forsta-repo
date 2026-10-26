const skapaKonto = (name, age, roll = "Student") => {
    console.log("Hej "  + name, age, roll)


    if (age < 18){
        return { message: "Du är inte gammal nog"}
    }

    return { message: "Du är gammal nog"}
}
const skapaKontoObject = skapaKonto("Max", 18, "Student")

console.log(skapaKontoObject.message)