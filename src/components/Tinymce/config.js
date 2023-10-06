import store from '@/store'

const getLang = () => {
  const lang = store.state.lang.lang
  if (lang === 'zh') {
    return 'zh_CN'
  } else {
    return 'en_US'
  }
}

export const apiKey = '64mjv027yic3xknhs3h7m1r84i03e1r1axyzog5514kd3xih'

// TinyMCE 5：https://www.tiny.cloud/docs/
export const defaultConfig = {
  selector: '#mytextarea',
  placeholder: '请输入内容',
  // 插件配置
  plugins: 'searchreplace lists advlist link image media print wordcount code help',
  height: 400,
  resize: true,
  min_height: 200,
  // 菜单栏配置
  menubar: false,
  // 工具栏配置
  toolbar_mode: 'sliding',
  toolbar: `undo redo |
            fontselect fontsizeselect formatselect |
            alignleft aligncenter alignright alignjustify |
            outdent indent |
            numlist bullist |
            forecolor backcolor removeformat |
            fullscreen preview print code|
            image media link |
            help`,
  // 状态栏
  statusbar: true,
  // 元素路径
  elementpath: true,
  // tiny 技术支持
  branding: false,
  // 语言类型
  language: getLang(),

  font_formats: `微软雅黑=Microsoft YaHei;
                 苹果苹方=PingFang SC;
                 宋体=simsun, serif;
                 仿宋体=FangSong, serif;
                 黑体=SimHei, sans-serif;
                 Arial=arial, helvetica, sans-serif;
                 Arial Black=arial black, avant garde;
                 Times New Roman=times new roman, times;`,
  fontsize_formats: '14px 16px 18px 20px 24px 26px 28px 30px 32px 36px',

  // 处理图片
  paste_as_text: true,
  image_advtab: true,
  paste_data_images: true,
  images_upload_handler: (blobInfo, progress) => {
    debugger
  },
  // 处理文件
  file_picker_callback: function (callback, value, meta) {
    debugger
  },

  // 事件处理
  setup: editor => {
    editor.on('init', e => {
      editor.setContent('<p>hello world</p>')
    })

    editor.on('change', e => {
      const content = editor.getContent()
      const textContent = editor.getContent({ format: 'text' })
      const charCount = textContent.length
      const wordCount = textContent.split(/\s+/).filter(Boolean).length

      console.log('内容:', content)
      console.log('字符数:', charCount)
      console.log('字数:', wordCount)
    })
  }
}
