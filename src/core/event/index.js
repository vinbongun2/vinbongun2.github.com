import { isMobile } from '../util/env'
import { body, on } from '../util/dom'
import * as sidebar from './sidebar'

export function initEvent (vm) {
  // Bind toggle button
  sidebar.btn('button.sidebar-toggle')
  // Bind sticky effect
  if (vm.config.coverpage) {
    !isMobile && on('scroll', sidebar.sticky)
  } else {
    body.classList.add('sticky')
  }
}