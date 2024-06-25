# queue.py
class Queue:
    def __init__(self):
        self.humans = []

    def add_person(self, person):
        if person.age > 60 or person.priority:
            self.humans.insert(0, person)
        else:
            self.humans.append(person)

    def find_in_queue(self, person):
        for index, p in enumerate(self.humans):
            if p == person:
                return index
        return -1

    def swap(self, person1, person2):
        index1 = self.find_in_queue(person1)
        index2 = self.find_in_queue(person2)
        if index1 != -1 and index2 != -1:
            self.humans[index1], self.humans[index2] = self.humans[index2], self.humans[index1]

    def get_next(self):
        if self.humans:
            return self.humans.pop(0)
        return None

    def get_next_blood_type(self, blood_type):
        for index, person in enumerate(self.humans):
            if person.blood_type == blood_type:
                return self.humans.pop(index)
        return None

    def sort_by_age(self):
        priority_list = [p for p in self.humans if p.priority]
        non_priority_list = [p for p in self.humans if not p.priority]
        sorted_priority = sorted(priority_list, key=lambda p: p.age, reverse=True)
        sorted_non_priority = sorted(non_priority_list, key=lambda p: p.age, reverse=True)
        self.humans = sorted_priority + sorted_non_priority

    def rearrange_queue(self):
        if not self.humans:
            return
        
        rearranged = [self.humans[0]]
        last_family = rearranged[0].family

        for person in self.humans[1:]:
            if person in last_family:
                inserted = False
                for i in range(len(rearranged)):
                    if rearranged[i] not in person.family and (i == len(rearranged) - 1 or rearranged[i+1] not in person.family):
                        rearranged.insert(i+1, person)
                        inserted = True
                        break
                if not inserted:
                    rearranged.append(person)
            else:
                rearranged.append(person)
            last_family = person.family

        self.humans = rearranged
