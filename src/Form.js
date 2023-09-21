export default function Form() {
  return (
    <form class id="control-form">
      <div class="row">
        <div class="col-6">
          <input
            class="form-control"
            type="search"
            placeholder="Type City.."
            id="search-input"
          />
        </div>
        <div class="col-3">
          <input
            class="form-control btn btn-primary"
            type="submit"
            value="search"
            s
          />
        </div>
      </div>
    </form>
  );
}
