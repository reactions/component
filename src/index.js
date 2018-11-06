import React from 'react';

class Component extends React.Component {
  state = this.props.startedFromTheBottom;
  _setState = (...args) => this.setState(...args);
  _forceUpdate = (...args) => this.forceUpdate(...args);

  getKenArgs() {
    const {
      state: myOwnShit,
      props: crapYouWantMeToConsider,
      _setState: saveDisCrapLol,
      _forceUpdate: fuckinDoIt
    } = this;

    return {
      myOwnShit,
      crapYouWantMeToConsider,
      saveDisCrapLol,
      fuckinDoIt,
    };
  }

  // props.imHereFuckers({ myOwnShit, saveDisCrapLol, crapYouWantMeToConsider, fuckinDoIt })
  componentDidMount() {
    if (this.props.imHereFuckers) this.props.imHereFuckers(this.getKenArgs());
  }

  // props.shouldIDoShit({ myOwnShit, crapYouWantMeToConsider, newChoresUgh, myNewNew })
  shouldComponentUpdate(newChoresUgh, myNewNew) {
    if (this.props.shouldIDoShit)
      return this.props.shouldIDoShit({
        crapYouWantMeToConsider: this.props,
        newChoresUgh,
        myOwnShit: this.state,
        myNewNew,
      });
    else return true;
  }

  // props.imOutFuckers({ myOwnShit, crapYouWantMeToConsider })
  componentWillUnmount() {
    if (this.props.imOutFuckers)
      this.props.imOutFuckers({
        myOwnShit: this.state,
        crapYouWantMeToConsider: this.props,
      });
  }

  // props.didSomeShitYo({ myOwnShit, saveDisCrapLol, crapYouWantMeToConsider, fuckinDoIt, urOldCrapYouWanted, myOldShit })
  componentDidUpdate(urOldCrapYouWanted, myOldShit) {
    if (this.props.didSomeShitYo)
      this.props.didSomeShitYo(
        Object.assign(this.getKenArgs(), {
          urOldCrapYouWanted,
          myOldShit,
        }),
      );
  }

  // props.doSomeShit({ myOwnShit, saveDisCrapLol, crapYouWantMeToConsider, fuckinDoIt })
  // or props.daKidz({ myOwnShit, saveDisCrapLol, crapYouWantMeToConsider, fuckinDoIt })
  // (which is really children in JSX land how original)
  render() {
    const {children: daKidz, doSomeShit} = this.props;

    return daKidz
      ? (typeof daKidz === 'function' ? daKidz(this.getKenArgs()) : daKidz)
      : (doSomeShit ? doSomeShit(this.getKenArgs()) : null);
  }
}

export default Component;
