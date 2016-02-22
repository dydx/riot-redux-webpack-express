<sample-output>
  <h1>{this.opts.store.getState().title}</h1>
  <p>{this.opts.store.getState().description}</p>

  <script>
    this.opts.store.subscribe(() => this.update());
  </script>
</sample-output>
