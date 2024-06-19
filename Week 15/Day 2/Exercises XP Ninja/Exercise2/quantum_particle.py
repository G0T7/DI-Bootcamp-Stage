import random

class QuantumParticle:
    def __init__(self, x=None, y=None, p=None):
        self.x = x if x is not None else self.position()
        self.y = y if y is not None else self.momentum()
        self.p = p if p is not None else self.spin()

    def position(self):
        self.disturbance()
        return random.randint(1, 10000)

    def momentum(self):
        self.disturbance()
        return random.random()

    def spin(self):
        self.disturbance()
        return random.choice([1/2, -1/2])

    def disturbance(self):
        print("Quantum Interferences!!")
        self.x = random.randint(1, 10000)
        self.y = random.random()

    def __repr__(self):
        return f"QuantumParticle(x={self.x}, p={self.y}, spin={self.p})"

    def entangle(self, other):
        if not isinstance(other, QuantumParticle):
            raise TypeError("Entanglement is only possible between QuantumParticle instances.")
        
        self.p = 1/2
        other.p = -1/2
        print("Spooky Action at a Distance !!")

# Test the implementation
if __name__ == "__main__":
    p1 = QuantumParticle(x=1, p=5.0)
    p2 = QuantumParticle(x=2, p=5.0)
    p1.entangle(p2)
    print(p1)
    print(p2)

    p3 = QuantumParticle()
    p4 = QuantumParticle()
    p3.entangle(p4)
    print(p3)
    print(p4)
