# main.py
from human import Human
from queue import Queue

# Create humans
john = Human("1", "John Doe", 70, False, "A")
jane = Human("2", "Jane Doe", 65, True, "O")
bob = Human("3", "Bob Smith", 30, False, "B")
alice = Human("4", "Alice Johnson", 55, True, "AB")

# Add family members
john.add_family_member(jane)
bob.add_family_member(alice)

# Create queue and add humans
queue = Queue()
queue.add_person(john)
queue.add_person(jane)
queue.add_person(bob)
queue.add_person(alice)

# Rearrange queue to avoid family members next to each other
queue.rearrange_queue()

# Process queue
while (person := queue.get_next()) is not None:
    print(f"{person.name} ({person.age}, {person.blood_type}) is getting vaccinated.")
