function App() {
  const para = document.createElement('p');
  para.textContent = 'This is also available!';
  document.getElementById('root').append(para);
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also available!</p>
    </div>
  );
}

export default App;
