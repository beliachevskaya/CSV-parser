import * as csv from "csv-parser";
import fs = require("fs");
import * as config from "./config";
let results: Object [] = [];
const outputFile = "InvalidObjects.txt";

fs.createReadStream("Users.csv")
  .pipe(csv({
      separator: ";"
  }))
  .on("data", function (data) {
    let errors: string[] = [];
    config.csv.forEach((row: config.ColumnDescriptor)=>{
       row.validators.forEach((validator: config.Validators)=>{
            validator.validate(data[row.name]).forEach((error:string)=>{
              errors.push(`[${row.name}] ${error}`);
            })
           })
      });
    if (errors.length === 0){
      results.push(data);
    }else{
      fs.appendFileSync(outputFile, "\n" + JSON.stringify(data) + "\n");
      errors.forEach((error: string) => {
        fs.appendFileSync(outputFile, error + "\n");
        console.log(JSON.stringify(data) + "\n", error + "\n");
      });
  }
   })
  .on("end", () => {  
      console.log(results);
  });