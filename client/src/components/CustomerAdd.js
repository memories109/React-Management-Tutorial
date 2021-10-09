import React, { Component} from 'react';
import { post } from 'axios';

class CustomerAdd extends Component {

    constructor(props){
        super(props);
        this.stats = {
            file : null,
            userName: '',
            birtheday: '',
            gender: '',
            job: '',
            fileName: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
        .then((response) => {
            console.log(response.data);
        })
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.stats.file);
        formData.append('name', this.stats.userName);
        formData.append('birthday', this.stats.birthday);
        formData.append('gender', this.stats.gender);
        formData.append('job', this.stats.job);
        const config = {
            headers : { 
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }


    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                프로필 이미지 : <input type="file" name="file" file={this.stats.file} value={this.stats.fileName} onChange={this.handleFileChange}/><br/>
                이름 : <input type="text" name="userName" value={this.stats.userName} onChange={this.handleValueChange}/><br/>
                생년월일 : <input type="text" name="birthday" value={this.stats.birtheday} onChange={this.handleValueChange}/><br/>
                성별 : <input type="text" name="gender" value={this.stats.gender} onChange={this.handleValueChange}/> <br/>
                직업 : <input type="text" name="job" value={this.stats.job} onChange={this.handleValueChange}/> <br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
} 
export default CustomerAdd;
