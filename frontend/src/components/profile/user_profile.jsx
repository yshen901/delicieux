import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.user.age,
      gender: this.props.user.gender,
      height: this.props.user.height,
      weight: this.props.user.weight,
      activityLevel: this.props.user.activityLevel,
      weeklyTarget: this.props.user.weeklyTarget,
      edit: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hitEnter = this.hitEnter.bind(this);
    this.updateGender = this.updateGender.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
    document.addEventListener("keydown", this.hitEnter);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.hitEnter);
  }

  flip() {
    return !this.state.edit
  }

  toggleEdit() {
    this.setState({ edit: this.flip() }, () => {
      if(!this.state.edit) {
        this.handleSubmit();
      } else {
          this.setState({ 
            age: this.props.user.age,
            gender: this.props.user.gender,
            height: this.props.user.height, 
            weight: this.props.user.weight,
            activityLevel: this.props.user.activityLevel,
            weeklyTarget: this.props.user.weeklyTarget,
          });
      }
    });
  }

  update(field) {
    const min = 0;
    const max = 999;
    return e => {
      if(field === "age" || field === "height"|| field === "weight") {
        if (parseInt(e.target.value) > max) 
          e.target.value = max.toString();
        else if (parseInt(e.target.value) < min)
          e.target.value = min.toString();
      }

      if(field === "gender") {
        this.setState({ [field]: e.target.value }, () => this.updateGender());
      } else {
        this.setState({ [field]: e.target.value });
      }
    }
  }

  hitEnter(e) {
    if(e.key === "Enter" && this.state.edit) {
      this.toggleEdit();
    }
  }

  handleSubmit() {
    this.props.updateUser({ 
      id: this.props.userId, 
      age: this.state.age, 
      gender: this.state.gender,
      height: this.state.height,
      weight: this.state.weight, 
      activityLevel: this.state.activityLevel,
      weeklyTarget: this.state.weeklyTarget
    });
  }

  updateGender() {
    this.props.updateUser({ 
      id: this.props.userId, 
      gender: this.state.gender,
      age: this.props.user.age, 
      height: this.props.user.height,
      weight: this.props.user.weight, 
      activityLevel: this.props.user.activityLevel,
      weeklyTarget: this.props.user.weeklyTarget
    });
  }
  
  render() {
    let height = this.props.user.height;
    let weight = this.props.user.weight;
    let age = this.props.user.age;
    let activityLevel; 
    let weeklyTarget;
    let edit = "Edit";
    let user;
    let gender;
    
    // switch(this.props.user.gender) {
    //   case "M":
    //     gender = <i class="fas fa-male"></i>;
    //     break;
    //   case "F":
    //     gender = <i class="fas fa-female"></i>;
    //     break;
    //   case "O":
    //     gender = <i class="fas fa-paw"></i>;
    //     break;
    //   default:
    //     gender = <i class="fas fa-female"></i>;
    //     break;
    // }

    switch(this.props.user.activityLevel) {
      case 1:
        activityLevel = "Sedentary";
        break;
      case 2:
        activityLevel = "Lightly Active";
        break;
      case 3:
        activityLevel = "Moderately Active";
        break;
      case 4:
        activityLevel = "Very Active";    
        break;
      default: 
        activityLevel = ""; 
        break;
    }

    switch(this.props.user.weeklyTarget) {
      case 0:
        weeklyTarget = "Maintain my weight";
        break;
      case -1.0:
        weeklyTarget = "Lose 1.0 kg/week";
        break;
      case -0.75:
        weeklyTarget = "Lose 0.75 kg/week";
        break;
      case -0.5:
        weeklyTarget = "Lose 0.5 kg/week";    
        break;
      case -0.25:
        weeklyTarget = "Lose 0.25 kg/week";
        break;
      case 0.25:
        weeklyTarget = "Gain 0.25 kg/week";
        break;
      case 0.5:
        weeklyTarget = "Gain 0.5 kg/week";
        break;
      case 0.75:
        weeklyTarget = "Gain 0.75 kg/week";    
        break;
      case 1.0:
        weeklyTarget = "Gain 1.0 kg/week";    
        break;
      default: 
        weeklyTarget = ""; 
        break;
    }

      gender = 
        <div className="gender-radio-container">
            <input type="radio" 
              className="gender-radio" 
              onChange={this.update("gender")}
              name="gender"
              value={"M"}
              id="genderM"
              checked={this.props.user.gender === "M"}/>
              <label for="genderM" className="gender-icon"><i class="fas fa-male"></i></label>
        
            <input type="radio" 
              className="gender-radio" 
              onChange={this.update("gender")}
              name="gender"
              value={"F"}
              id="genderF"
              checked={this.props.user.gender === "F"}/>
              <label for="genderF" className="gender-icon"><i class="fas fa-female"></i></label>

            <input type="radio" 
              className="gender-radio" 
              onChange={this.update("gender")}
              name="gender"
              value={"O"}
              id="genderO"
              checked={this.props.user.gender === "O"}/>
              <label for="genderO" className="gender-icon"><i class="fas fa-paw"></i></label>
        </div>;
        
    if(this.state.edit) {
      age = <input type="number" 
        className="user-info-input" 
        value={this.state.age}
        onChange={this.update("age")}
        />;

      height = <input type="number" 
        className="user-info-input" 
        value={this.state.height}
        onChange={this.update("height")}
        />;

      weight = <input type="number" 
        className="user-info-input" 
        value={this.state.weight}
        onChange={this.update("weight")}
        />;

      activityLevel = 
        <select onChange={this.update("activityLevel")}>
          <option value="1" selected={this.props.user.activityLevel === 1}>
            Sedentary
          </option>
          <option value="2" selected={this.props.user.activityLevel === 2}>
            Lightly Active
          </option>
          <option value="3" selected={this.props.user.activityLevel === 3}>
            Moderately Active
          </option>
          <option value="4" selected={this.props.user.activityLevel === 4}>
            Very Active
          </option>
        </select>
      
      weeklyTarget = 
        <select onChange={this.update("weeklyTarget")}>
          <option value="0" selected={this.props.user.weeklyTarget === 0}>
            Maintain my weight
          </option>
          <option value="-1.0" selected={this.props.user.weeklyTarget === -1.0}>
            Lose 1.0 kg/week
          </option>
          <option value="-0.75" selected={this.props.user.weeklyTarget === -0.75}>
            Lose 0.75 kg/week
          </option>
          <option value="-0.5" selected={this.props.user.weeklyTarget === -0.5}>
            Lose 0.5 kg/week
          </option>
          <option value="-0.25" selected={this.props.user.weeklyTarget === -0.25}>
            Lose 0.25 kg/week
          </option>
          <option value="0.25" selected={this.props.user.weeklyTarget === 0.25}>
            Gain 0.25 kg/week
          </option>
          <option value="0.5" selected={this.props.user.weeklyTarget === 0.5}>
            Gain 0.5 kg/week
          </option>
          <option value="0.75" selected={this.props.user.weeklyTarget === 0.75}>
            Gain 0.75 kg/week
          </option>
          <option value="1.0" selected={this.props.user.weeklyTarget === 1.0}>
            Gain 1.0 kg/week
          </option>
        </select>

      edit = "Save";
    }

    if(this.props.user.name) {
      user =  this.props.user.name[0].toUpperCase() + this.props.user.name.slice(1);
    }

    return (
      <div className="profile-container">
        <div className="profile-item-container">
          <div>
            Name: { user }
          </div>
          <div onClick={this.toggleEdit}>
            { edit }
          </div>
        </div>
        <div className="profile-item-container">
          <div>
            Sex
          </div>
          <div>
            { gender }
          </div>
        </div>
        <div className="profile-item-container">
          <div>
            Age
          </div>
          <div>
            { age }
          </div>
        </div>
        <div className="profile-item-container">
          Height
          <div>
            { height } cm
          </div>
        </div>
        <div className="profile-item-container">
          Activity Level
          <div>
            { activityLevel }
          </div>
        </div>     
        <div className="profile-item-container">
          Current Weight
          <div>
            { weight } kg
          </div>
        </div>
        <div className="profile-item-container">
          Weekly Target
          <div>
            { weeklyTarget }
          </div>
        </div> 
        Daily Caloric Need: { Math.floor(this.props.calorieCalc(this.props.user)) } cal
      </div>
    );
  }
}
  
export default UserProfile;
  
  // User information -- UpdateUser