function ApplyBtn() {
  return (
    <button
      className="PrimaryButton Button"
      style={{
        position: "relative",
        marginTop: "50px",
        backgroundColor: "green",
        color: "white",
        border: "none",
        marginLeft: "auto",
        display: "block",
        right: "10px",
        marginBottom: "200px",
      }}
      type="button"
      data-test="condition-button-run"
    >
      Согласовать
    </button>
  );
}

export default ApplyBtn;
