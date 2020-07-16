const styles = {
  container: {
    width: "100%",
    background: "#ffffff",
    boxShadow:
      "0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    fontFamily: "Montserrat",
    padding: "1rem",
  },
  inputContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "4fr 1fr 1fr",
    gap: "1.5rem",
  },
  addButton: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "1.5rem",
    color: "#ffffff",
    background: "#2C5282",
    border: "none",
    padding: "1rem 1.5rem",
    borderRadius: 10,
    width: "100%",
  },
  inputText: {
    color: "#2B6CB0",
    width: "100%",
    border: "3px solid #2C5282",
    borderRadius: 6,
    fontSize: "1.5rem",
  },
  inputAmount: {
    border: "3px solid #2C5282",
    borderRadius: 6,
    fontSize: "1.5rem",
    width: "100%",
  },

  listBox: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
  },

  itemName: {
  },
  itemAmount: {
  },

  listItem: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default styles;
