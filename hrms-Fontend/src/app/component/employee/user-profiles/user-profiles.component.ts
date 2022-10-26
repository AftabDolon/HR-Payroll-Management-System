import { Component, OnInit } from '@angular/core';

interface IUser {
  name: string;
  img: string;
  
  title: string;
  fbLink: string;
  twitterLink: string;
  instgramLink: string;
  linkdinLink: string;
}
@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public users: IUser[] = [
    
    {
      name: 'Shahid Ullah',
      img: 'img5.jpg',
      fbLink: 'https://www.facebook.com/profile.php?id=100007511833535',
      title: 'Web Designer',
      twitterLink: "#",
      instgramLink: 'https://www.instagram.com/shahid_pparvez/',
      linkdinLink: 'https://www.linkedin.com/in/shahid-parvez-a8b09320a'
    },
    {
      name: 'Tarequl Islam',
      img: 'img-tareq.jpg',
      fbLink: 'https://www.facebook.com/mstarequlislam',
      title: 'Backend Designer',
      twitterLink: "#",
      instgramLink: 'https://www.instagram.com/mstarequlislam/',
      linkdinLink: 'https://www.linkedin.com/in/tarequl-islam-mihir-319a451a6/'
      
    },
    {
      name: 'MD Aftab Ibne Halim',
      img: 'img-aftab.jpg',
      fbLink: 'https://www.facebook.com/md.aftab.9655806/',
      title: 'Java Developer',
      twitterLink: "#",
      instgramLink: 'https://www.instagram.com/aftabdolon/',
      linkdinLink: 'https://www.linkedin.com/in/aftab-dolon-740a17193'
      
    },
    {
      name: 'Juwel Rana',
      img: 'Image of Rana.jpg',
      fbLink: 'https://www.facebook.com/jewe.rana.1122',
      title: 'Java Developer',
      twitterLink: "#",
      instgramLink: '#',
      linkdinLink: 'https://www.linkedin.com/in/jewelrana1996/'
      
    },
    
    {
      name: 'Nur Islam',
      img: 'img-rajib.jpg',
      fbLink: 'https://www.facebook.com/info.nurislamrajib',
      title: 'Backend Designer',
      twitterLink: "#",
      instgramLink: 'https://www.instagram.com/rajib_nur/',
      linkdinLink: 'https://www.linkedin.com/in/nur-islam-rajib-a9215a191'
      
    },
    {
      name: 'Sadik Hasan',
      img: 'img-sadik.jpg',
      fbLink: 'https://www.facebook.com/sadikhasan870',
      title: 'Backend Designer',
      twitterLink: "#",
      instgramLink: '#',
      linkdinLink: '#'
      
    }
  ];

}
