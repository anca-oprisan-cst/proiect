import {Component, OnInit} from '@angular/core';
import {FileItem, FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.less']
})
export class MyProfileComponent implements OnInit {
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  allowedFileType = 'image/jpeg';
  wrongFileType = false;
  fileData: any;

  constructor() {
  }

  ngOnInit(): void {
    this.setUploaderInstance();
    this.setUploaderMethods();
  }


  setUploaderInstance(): void {
    this.uploader = new FileUploader({
      url: '',
      authToken: `Bearer ${localStorage.getItem('token')}`,
      autoUpload: false,
      removeAfterUpload: false,
      maxFileSize: 2 * 1024 * 1024 * 1024,
    });
  }

  onFileSelected() {
    this.uploader.queue.forEach((fileItem: FileItem) => {
      if (fileItem.file.type !== this.allowedFileType) {
        this.wrongFileType = true;
        // this.uploader.clearQueue();
        this.uploader.removeFromQueue(fileItem);
        return;
      }
    });
    this.uploader.uploadAll();
  }

  fileOverBase(event) {
    this.uploader.queue.forEach((fileItem: FileItem) => {
      if (fileItem.file.type !== this.allowedFileType) {
        this.wrongFileType = true;
        this.uploader.clearQueue();
        return;
      }
      this.uploader.uploadAll();
    });
  }

  setUploaderMethods() {
    this.uploader.onSuccessItem = (fileItem: FileItem, response: any) => {
      this.fileData = fileItem;
      console.log(response);
    };

    this.uploader.onErrorItem = (fileItem: FileItem, response: any) => {
      console.log(response);
    };

    this.uploader.onProgressItem = (fileItem, progress) => {
      console.log(progress);
    };
  }
}
