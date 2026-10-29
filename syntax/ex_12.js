function vacation(people,group,day){
    let pricePerPerson = 0 ;
    switch(group){
        case("Students"):{
            switch(day){
                case("Friday"):
                    pricePerPerson = 8.45;
                    break;
                
                case("Saturday"):
                    pricePerPerson = 9.80;
                    break;
                
                case("Sunday"):
                    pricePerPerson = 10.46
                    break;
            }
        break;
        }
    
        case("Business"):{
            switch(day){
                case("Friday"):
                    pricePerPerson = 10.90;
                    break;
                
                case("Saturday"):
                    pricePerPerson = 15.60;
                    break;
                
                case("Sunday"):
                    pricePerPerson = 16.00;
                    break;
                
            }
            break
        }
        case("Regular"):{
            switch(day){
                case("Friday"):
                    pricePerPerson = 15.00;
                    break;
                
                case("Saturday"):
                    pricePerPerson = 20.00;
                    break;
                
                case("Sunday"):
                    pricePerPerson = 22.50;
                    break;
            }
            break;
        }


            
        }
        let total_price = pricePerPerson * people
        if (people >= 30 && group == "Students"){
            total_price -= total_price * 0.15;
        }
        else if(people >= 100 && group == "Business"){
            people -= 10;
            total_price = 0;
            total_price = pricePerPerson * people;
        }
        else if (people >= 10 && people <= 20 && group == "Regular"){
            total_price -= total_price * 0.05 
        }
        console.log(`Total price: ${total_price.toFixed(2)}`);
    }
