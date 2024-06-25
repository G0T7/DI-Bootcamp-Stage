import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

class GameOfLife:
    def __init__(self, width, height, initial_state=None):
        self.width = width
        self.height = height
        if initial_state is not None:
            self.grid = np.array(initial_state)
        else:
            self.grid = np.random.choice([0, 1], size=(height, width))

    def update(self):
        new_grid = self.grid.copy()
        for i in range(self.height):
            for j in range(self.width):
                total = int((self.grid[i, (j-1)%self.width] + self.grid[i, (j+1)%self.width] +
                             self.grid[(i-1)%self.height, j] + self.grid[(i+1)%self.height, j] +
                             self.grid[(i-1)%self.height, (j-1)%self.width] + self.grid[(i-1)%self.height, (j+1)%self.width] +
                             self.grid[(i+1)%self.height, (j-1)%self.width] + self.grid[(i+1)%self.height, (j+1)%self.width]))
                if self.grid[i, j] == 1:
                    if (total < 2) or (total > 3):
                        new_grid[i, j] = 0
                else:
                    if total == 3:
                        new_grid[i, j] = 1
        self.grid = new_grid

    def animate(self, i):
        self.update()
        self.mat.set_data(self.grid)
        return [self.mat]

    def run(self, generations=100):
        fig, ax = plt.subplots()
        self.mat = ax.matshow(self.grid, cmap='binary')
        ani = animation.FuncAnimation(fig, self.animate, frames=generations, interval=200, save_count=50)
        plt.show()

# Example usage
width, height = 20, 20

# Initial state (glider)
initial_state = np.zeros((height, width), dtype=int)
initial_state[1, 2] = 1
initial_state[2, 3] = 1
initial_state[3, 1] = 1
initial_state[3, 2] = 1
initial_state[3, 3] = 1

game = GameOfLife(width, height, initial_state)
game.run(100)
