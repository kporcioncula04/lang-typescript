function Component(constructor: Function) {
  console.log("Compoennt decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDom = () => {
    console.log("inserting the compoentn in the Dom");
  };
}

@Component
class ProfileComponent {}
