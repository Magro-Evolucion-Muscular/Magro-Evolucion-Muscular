function Flavour() {
  return (
    <>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="Vainilla" />
        <label className="form-check-label" htmlFor="Vainilla">
          Vainilla
        </label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="Chocolate" />
        <label className="form-check-label" htmlFor="Chocolate">
          Chocolate
        </label>
      </div>

      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="Fresa" />
        <label className="form-check-label" htmlFor="Fresa">
          Fresa
        </label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="Sin_Sabor" />
        <label className="form-check-label" htmlFor="Sin_Sabor">
          Sin Sabor
        </label>
      </div>
    </>
  );
}

export default Flavour;
