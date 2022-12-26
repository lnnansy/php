const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Елена",
            "id_4": "Татьяна",
            "id_5": "Анастасия",
            "id_6": "Галина",
            "id_7": "Нина",
            "id_8": "Зарина",
            "id_9": "Екатерина",
            "id_10": "Анна"
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    worksJson: `{
        "count": 9,
        "list": {     
            "id_1": {"title": "Плотник", "belongs": "m"},
             "id_2": {"title": "Слесарь", "belongs": "m"},
            "id_3": {"title": "Солдат", "belongs": "m"},
            "id_4": {"title": "Менеджер", "belongs": "с"},
            "id_5": {"title": "Врач", "belongs": "с"},
            "id_6": {"title": "Учитель", "belongs": "с"},
            "id_7": {"title": "Няня", "belongs": "f"},
            "id_8": {"title": "Швея", "belongs": "f"},
            "id_9": {"title": "Шахтер", "belongs": "m"}
            
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        
        return obj.list[prop];
    },
    randomGender: function() {
        const randGend = Math.floor(Math.random()*2);
        
        if (randGend == '0') {
            return this.GENDER_MALE;
        } else if (randGend == '1') {
            return this.GENDER_FEMALE;
            };
    },
    
    randomFirstName: function() {
                
        if (this.person.gender == this.GENDER_MALE) {
                    
                    
                    
                    return this.randomValue(this.firstNameMaleJson);
        } else if (this.person.gender == "Женщина") {
                    
                    
                    return this.randomValue(this.firstNameFemaleJson);
            };
    },
    
    randomSurname: function () {
                    
        if (this.person.gender == this.GENDER_MALE) {
                        
                        
                        
                        return this.randomValue(this.surnameJson);
        } else if (this.person.gender == "Женщина") {
                        
                        
                        return this.randomValue(this.surnameJson)+"а";
            };
    },
                    
    randomSecondName: function () {
        let optionSecondname=this.randomValue(this.firstNameMaleJson);
        if (this.person.gender == this.GENDER_MALE) {
            
            
            if (optionSecondname[optionSecondname.length-1]=="а") {
              
                optionSecondname[optionSecondname.length-1]="";
                optionSecondname = optionSecondname.slice(0, -1); 
                
                return optionSecondname+"ович";
            } else if (optionSecondname[optionSecondname.length-1]=="й") {
                
                
                optionSecondname = optionSecondname.slice(0, -1); 
                
                return optionSecondname+"евич";
            } else {
           
                
            return optionSecondname+"ович";
            };
        } else if (this.person.gender == "Женщина") {
        
            if (optionSecondname[optionSecondname.length-1]=="а") {
              
                optionSecondname[optionSecondname.length-1]="";
                optionSecondname = optionSecondname.slice(0, -1); 
                
                return optionSecondname+"ична";
            } else if (optionSecondname[optionSecondname.length-1]=="й") {
                
                
                optionSecondname = optionSecondname.slice(0, -1); 
                
                return optionSecondname+"евна";
            } else {
           
                
            return optionSecondname+"овна";
            }

                        };
    },

    randomBirth: function() {
        let birth = this.randomIntNumber(1975,2000);
        return birth;
     },


    randomData1: function() {
        let dataChislo = this.randomValue(this.monthJson);
        let dataChisloCount = 1;
        
        if ((dataChislo == "февраля") && (this.birth % 4) == 0) {
            dataChisloCount = this.randomIntNumber(0,29);
            return (dataChisloCount+" "+dataChislo);
        }  else if ((dataChislo == "февраля") && (this.birth % 4) !== 0) {
            dataChisloCount = this.randomIntNumber(0,28);
            return (dataChisloCount+" "+dataChislo);
        }           
        else if ((dataChislo == "января") || (dataChislo == "марта") || (dataChislo == "мая") || (dataChislo == "июня") || (dataChislo == "августа") || (dataChislo == "октября") || (dataChislo == "декабря")) 
        {
            
            dataChisloCount = this.randomIntNumber(0,31);
           
            
            return (dataChisloCount+" "+dataChislo);
        } else 
        {
            dataChisloCount = this.randomIntNumber(0,30);
            
            return (dataChisloCount+" "+dataChislo);
        }




    },
    
    randomWorks: function() {
        let worksCount = this.randomValue(this.worksJson);
        console.log(worksCount.title);
        if (this.person.gender == this.GENDER_MALE) {
            while (worksCount.belongs === "f") {
                worksCount = this.randomValue(this.worksJson);
                console.log(worksCount.title);
            }; 
            return worksCount.title;
        } else if (this.person.gender == this.GENDER_FEMALE) {
            while (worksCount.belongs === "m") {
                worksCount = this.randomValue(this.worksJson);
                console.log(worksCount.title);
            }; 
            return worksCount.title;
        };


    },
         
     getPerson: function () {
        this.person = {};
        
        //this.person.gender = this.randomGender();
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surnameName = this.randomSurname();
        this.person.secondName = this.randomSecondName();
        this.person.birthYear= this.randomBirth();
        this.person.data1 = this.randomData1();
        this.person.works = this.randomWorks();
        return this.person;
    },
    getCleanField: function () {
        this.person = {};
        this.person.gender = "Генерация пола,";
        this.person.firstName = "Генерация Имени";
        this.person.surnameName = "Генерация Фамилии";
        this.person.secondName = "Генерация Отчества";
        this.person.birthYear= "Генерация";
        this.person.data1 = "д.р.";
        this.person.works = "Генерация Профессии";
        return this.person;
    },
 };
