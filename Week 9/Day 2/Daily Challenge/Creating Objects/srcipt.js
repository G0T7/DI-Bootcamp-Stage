class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  // Instantiate a new Video instance and call the watch() method
  const video1 = new Video("Introduction to JavaScript", "JohnDoe", 300);
  video1.watch();
  
  // Instantiate a second Video instance with different values
  const video2 = new Video("Advanced CSS Techniques", "JaneSmith", 450);
  video2.watch();
  
  // Bonus: Use an array to store data for five Video instances
  const videosData = [
    { title: "JavaScript Basics", uploader: "MikeJohnson", time: 240 },
    { title: "React Crash Course", uploader: "EmilyBrown", time: 600 },
    { title: "Python for Beginners", uploader: "AlexSmith", time: 360 },
    { title: "HTML5 Essentials", uploader: "SophiaLee", time: 180 },
    { title: "Node.js Fundamentals", uploader: "DavidWilliams", time: 480 }
  ];
  
  // Bonus: Loop through the array to instantiate those instances
  const videos = [];
  videosData.forEach(data => {
    const { title, uploader, time } = data;
    const video = new Video(title, uploader, time);
    videos.push(video);
  });
  
  // Test by calling watch() method on each video instance
  videos.forEach(video => video.watch());
  