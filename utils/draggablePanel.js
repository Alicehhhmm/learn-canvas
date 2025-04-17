// 可拖动面板组件
export default class DraggablePanel {
    constructor(title, contentHTML, initialX = 20, initialY = 100, width = 300) {
        this.title = title
        this.contentHTML = contentHTML
        this.initialX = initialX
        this.initialY = initialY
        this.width = width
        this.panelElement = null
        this.headerElement = null
        this.isDragging = false
        this.offsetX = 0
        this.offsetY = 0

        this.createPanel()
        this.setupEventListeners()
    }

    createPanel() {
        this.panelElement = document.createElement('div')
        this.panelElement.className = 'draggable-panel'
        this.panelElement.style.width = this.width + 'px'
        this.panelElement.style.left = this.initialX + 'px'
        this.panelElement.style.top = this.initialY + 'px'

        this.headerElement = document.createElement('div')
        this.headerElement.className = 'panel-header'
        this.headerElement.textContent = this.title

        const contentElement = document.createElement('div')
        contentElement.className = 'panel-content'
        contentElement.innerHTML = this.contentHTML

        this.panelElement.appendChild(this.headerElement)
        this.panelElement.appendChild(contentElement)

        document.body.appendChild(this.panelElement)
    }

    setupEventListeners() {
        this.headerElement.addEventListener('mousedown', e => {
            this.isDragging = true
            this.offsetX = e.clientX - this.panelElement.offsetLeft
            this.offsetY = e.clientY - this.panelElement.offsetTop
            this.panelElement.style.zIndex = '1001'
        })

        document.addEventListener('mousemove', e => {
            if (!this.isDragging) return

            const newX = e.clientX - this.offsetX
            const newY = e.clientY - this.offsetY

            this.panelElement.style.left = newX + 'px'
            this.panelElement.style.top = newY + 'px'
        })

        document.addEventListener('mouseup', () => {
            this.isDragging = false
            this.panelElement.style.zIndex = '1000'
        })
    }

    updateContent(newContentHTML) {
        if (this.panelElement && this.panelElement.querySelector('.panel-content')) {
            this.panelElement.querySelector('.panel-content').innerHTML = newContentHTML
        }
    }

    setTitle(newTitle) {
        if (this.headerElement) {
            this.headerElement.textContent = newTitle
        }
    }

    setPosition(x, y) {
        if (this.panelElement) {
            this.panelElement.style.left = x + 'px'
            this.panelElement.style.top = y + 'px'
        }
    }
}
