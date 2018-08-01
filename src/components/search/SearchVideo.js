import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import VideoResults from '../image-results/VideoResults';

class SearchVideo extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api/videos/',
        apiKey:'9190468-82182ea6db0292e6b97056e40',
        videos:[]
    }

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val}, () => {
            if(val === ''){
                this.setState({ videos: []});
            } else {
                axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&video_type=video&per_page=${this.state.amount}&safesearch=true`

            )
            .then(res => this.setState({ videos: res.data.hits }))
            .catch(err => console.log(err));
            }
        });
    };

    // onAmountChange = (e, index, value)
    onAmountChange = (e, index, value) => this.setState({amount: value});

  render() {
      console.log(this.state.videos);
    return (
      <div>
        <TextField 
            name="searchText"   
            value={this.state.searchText}
            onChange={this.onTextChange}
            floatingLabelText="Search for Videos"
            fullWidth={true}   
        />
        <br />
        <SelectField
            name="amount"
            floatingLabelText="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
        >
            <MenuItem value={5} primaryText="5" />
            <MenuItem value={10} primaryText="10" />
            <MenuItem value={15} primaryText="15" />
            <MenuItem value={30} primaryText="30" />
            <MenuItem value={50} primaryText="50" />
        </SelectField>
        
        <br />
        {this.state.videos.length > 0 ? (
            <VideoResults videos={this.state.videos} />
            ) :null}
      </div>
    );
  }
}


export default SearchVideo;