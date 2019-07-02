import { Component, OnInit } from '@angular/core';
// 定义类型
interface TopMenu {
  title: string;
  link: string;
}
@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {
  title = '拼多多';
  // 让selectedIndex等于-1，开始不选中
  selectedIndex = -1;
  menus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
  ];
  getIndex(i){
    this.selectedIndex = i;
  }
  constructor() { }

  ngOnInit() {
  }

}
