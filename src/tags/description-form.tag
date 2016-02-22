<description-form>
  <form onsubmit={changeDescription}>
    <input type="text" name="newDescription">
    <input type="submit" value="Change Description">
  </form>

  <script>
    var actions = require('../actions.js');
    changeDescription () {
      this.opts.store.dispatch(actions.changeDescription(this.newDescription.value));
    }
  </script>
</description-form>
