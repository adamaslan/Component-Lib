//Next-grid.js aka Layout.module.css

.container {
  min-height: 100vh;
  padding: 2rem;
  margin: 2rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: [col] 25% [col] 25% [col] 25% [col] 25%;
  grid-template-rows: [row] auto [row] auto [row];
  background-color: rgb(226, 199, 199);
  color: #444;
  align-items: center;
}

.main {
  grid-column: col / span 4;
  grid-row: row;
}

.submain {
  grid-column: col / span 2;
  grid-row: row 2;
  background-color: rgb(16, 180, 57);
}

.subsubmain {
  grid-column: col 3 / span 2;
  grid-row: row 2;
  background-color: rgb(182, 51, 51);
  color: rgb(56, 41, 190);
  border-radius: 20px;
  padding: 20px;
  font-size: 150%;
}
