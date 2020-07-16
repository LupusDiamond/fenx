const styles = {
  container: {
    width: 730,
    height: 500,
    background: "#ffffff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    fontFamily: "Montserrat"
  },
  inputContainer: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr 1fr",
    gap: "1rem",
    marginTop: 50
  },
  addButton: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: 30,
    color: "#ffffff",
    background: "#2C5282",
    border: "none",
    padding: 15,
    borderRadius: 10,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)",
  },
  inputText: {
    color: "#2B6CB0",
    width: "100%",
    height: "100%",
    border: "5px solid #2C5282",
    borderRadius: 6,
    padding: 0
  },
  inputAmount: {
    border: "5px solid #2C5282",
    borderRadius: 6,
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
  },
  inputTextContainer: {
    position: "relative",
    height: '100%',
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
  },
  inputTextLabel: {
    position: "absolute",
    top: 0,
    left: 30,
    background: "#ffffff"
  }
};

export default styles;
