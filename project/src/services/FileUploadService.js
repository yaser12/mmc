import http from "./Interceptor";

const upload = (file, onUploadProgress) => {
    let formData = new FormData();
    formData.append("file", file);
    return http.post("/reports/upload_image_for_report/7", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
};

const getFiles = () => {
    return http.get("/files");
};

export default {
    upload,
    getFiles,
};