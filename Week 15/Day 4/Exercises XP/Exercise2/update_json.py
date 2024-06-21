import json

# Given JSON string
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# Parse the JSON string into a Python dictionary
data = json.loads(sampleJson)

# Access the nested "salary" key
salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

# Add a new key "birth_date" at the same level as the "name" key
data["company"]["employee"]["birth_date"] = "1990-01-01"

# Print the updated dictionary
print("Updated dictionary:", data)

# Save the updated dictionary as JSON to a file
with open("updated_sample.json", "w") as file:
    json.dump(data, file, indent=4)

print("Updated JSON has been saved to 'updated_sample.json'.")
