function openCard() {
    // Split the front image and open it like a book
    document.querySelector('.left-page').style.transform = 'rotateY(-180deg)';
    document.querySelector('.right-page').style.transform = 'rotateY(180deg)';
  
    // Hide the button
    document.querySelector('.open-card-button').style.display = 'none';
  
    // Display the message content after a delay
    setTimeout(() => {
      document.querySelector('.message-content').style.opacity = '1';
    }, 1000);
}
