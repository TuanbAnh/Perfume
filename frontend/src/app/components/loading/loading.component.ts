import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  count = 5;
  time: any;
  constructor(private router: Router) {
    this.time = setInterval(() => {
      this.count--;

      if (this.count == -1) {
        this.router.navigate(['/home']);
        clearInterval(this.time);
      }
    }, 1000);
  }

  items = [
    'Nguyễn Lâm Tường',
    'Nguyễn Hữu Quang',
    'Tưởng Phi Quân',
    'Nguyễn Mạnh Minh',
    'Trịnh Xuân Tâm',
  ];

  highlightedIndices: Set<number> = new Set(); // Sử dụng Set để lưu các chỉ số đã tô màu

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    let index = 0; // Bắt đầu từ phần tử cuối
    const intervalId = setInterval(() => {
      if (index <= this.items.length) {
        this.highlightedIndices.add(index); // Thêm chỉ số hiện tại vào Set
        index++;
      } else {
        clearInterval(intervalId); // Dừng interval khi hoàn thành
      }
    }, 950); // Chạy mỗi 1 giây
  }
}
