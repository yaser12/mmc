// React built-in imports
import React, { useRef } from "react";

// Third-party libraries
import { Editor } from "@tinymce/tinymce-react";
import htmlDocx from "html-docx-js/dist/html-docx"; // to convert HTML to Docx.
import { convertToHtml } from "mammoth"; // to convert Docx to HTML.
import { saveAs } from "file-saver"; // to save contents of editor in a file.
import { useTranslation } from "react-i18next"; // For translation

const ReportEditor = () => {
  const { t, i18n } = useTranslation("words"); // for translation
  const fileUploader = useRef(null); // for file upload (import)

  const saveDocument = (content) => {
    console.log("contents of the file:", content);
  };

  const exportContent = (content) => {
    /**
     * Converts `content` from HTML to docx and exports the resutls
     * to a `.docx` file whose name depends on current date and time.
     */

    // check if content is undefined or an empty string.
    if (content !== undefined && content !== "") {
      // generate file name depending on current date and time
      let filename = "Report ";
      let time = new Date().toLocaleString();
      filename = filename.concat(time).concat(".docx");
      // convert HTML content of the editor to docx
      var converted = htmlDocx.asBlob(content, {
        orientation: "landscape",
        margins: { top: 720 },
      });
      // save the converted content into `filename`
      saveAs(converted, filename);
    }
  };

  const importContent = (e) => {
    /**
     * Converts `content` from HTML to docx and exports the resutls
     * to a `.docx` file whose name depends on current date and time.
     */

    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");

    reader.onload = function (evt) {
      // check whether the chosen `.docx` file
      // is generated by `html-docx-js`
      // or it's a standard file.
      if (
        evt.target.result.includes("document.html") &&
        evt.target.result.includes("------=mhtDocumentPart--")
      ) {
        // this means that the file is generated by the library
        importGeneratedDocx(evt.target.result);
      } else {
        // this means that the file is not generated by the library
        // which means it's a standard `.docx` file.
        importStandardDocx(file);
      }
    };
  };

  const importGeneratedDocx = (text) => {
    // #region extract HTML content
    // extract the embedded HTML content from
    // `.docx` file, which is generated by `html-docx-js`

    var htmlContent = text.substring(
      text.lastIndexOf("document.html"),
      text.lastIndexOf("------=mhtDocumentPart--")
    );
    htmlContent = htmlContent.replace("document.html", "");
    // #endregion

    // #region update Editor's state and UI
    // setContent(htmlContent);
    window.tinymce.activeEditor.setContent(htmlContent);
    // #endregion
  };

  const importStandardDocx = (file) => {
    // #region import generated `.docx` file
    // using the `mammoth` library
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function (evt) {
      convertToHtml({ arrayBuffer: evt.target.result })
        .then(function (result) {
          var html = result.value; // The generated HTML
          window.tinymce.activeEditor.setContent(html);
        })
        .done();
    };
    // #endregion
  };

  return (
    <>
      <Editor
        apiKey="l0h77xgu6f57jue1htumpe4fs0wmbecwi060ozrbu83tkv2k"
        init={{
          height: 600,
          width: 1000,
          language: i18n["language"],
          menubar: true,
          // https://www.tiny.cloud/docs/general-configuration-guide/upload-images/
          // ex. of postAcceptor.php: https://www.tiny.cloud/docs/advanced/php-upload-handler/
          images_upload_url: "postAcceptor.php", // this will be replaced with an endpoint later.
          paste_data_images: true,
          plugins: [
            "advlist lists image",
            "charmap print preview help",
            "searchreplace visualblocks",
            "table paste",
            "image",
          ],

          setup: function (editor) {
            //#region Save button
            editor.ui.registry.addButton("saveButton", {
              text: t("save_report"),
              onAction: function (e) {
                saveDocument(editor.getContent());
              },
            });
            //#endregion

            //#region Export button
            editor.ui.registry.addButton("exportButton", {
              text: t("export_report_as_docx"),
              onAction: function (e) {
                exportContent(editor.getContent());
              },
            });
            //#endregion

            //#region Import button
            editor.ui.registry.addButton("importButton", {
              text: t("import_report_from_docx"),
              onAction: function (e) {
                fileUploader.current.click();
              },
            });
            //#endregion
          },

          toolbar:
            "saveButton | exportButton | importButton | save | undo redo | formatselect | bold italic underline forecolor backcolor " +
            "| fontsizeselect | alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | removeformat | image | help",
        }}
      />

      <input
        type="file"
        id="file"
        ref={fileUploader}
        onChange={importContent}
        style={{ display: "none" }}
      />
    </>
  );
};

export default ReportEditor;