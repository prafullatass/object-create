const veryImportantInfo = Object.create(null, {
    socialSecurity: {
        value: "934-11-0201",
        writable: false
    },
    accountNumber: {
        value: "4483271255",
        writable: false
    },
    routingNumber: {
        value: "458979043",
        writable: false
    }
})

veryImportantInfo.socialSecurity = "haxx0r attack"
console.log(veryImportantInfo.socialSecurity)    // 934-11-0201  --> It didn't change!

// const JuanRodriguezPatient = {
//     firstName: "Juan",
//     lastName: "Rodriguez",
//     dob: "12/13/1985",
//     address: "127.0.0.1",
//     gender: "M",
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     age: function () {
//         const dob = new Date(this.dob)
//         const yearBirth = dob.getFullYear()
//         const now = new Date()
//         const yearNow = now.getFullYear()

//         return yearNow - yearBirth
//     }
// }

const JuanRodriguezPatient = Object.create({}, {
    firstName: {
        value: "Juan",
        enumerable: true
    },
    lastName: {
        value: "Rodriguez",
        enumerable: true
    },
    dob: {
        value: "12/13/1985",
        enumerable: true
    },
    address: {
        value: "127.0.0.1",
        enumerable: true
    },
    gender: {
        value: "M",
        enumerable: true
    },
    fullName: {
        value: function () {
            return `${this.firstName} ${this.lastName}`
        }
    },
    age: {
        value: function () {
            const dob = new Date(this.dob)
            const yearBirth = dob.getFullYear()
            const now = new Date()
            const yearNow = now.getFullYear()

            return yearNow - yearBirth
        }
    }
})