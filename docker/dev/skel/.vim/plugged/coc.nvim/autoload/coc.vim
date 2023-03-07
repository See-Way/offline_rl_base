let g:coc#_context = {'start': 0, 'candidates': []}
let g:coc_user_config = get(g:, 'coc_user_config', {})
let g:coc_global_extensions = get(g:, 'coc_global_extensions', [])
let g:coc_selected_text = ''
let s:watched_keys = []
let s:is_vim = !has('nvim')
let s:error_sign = get(g:, 'coc_status_error_sign', has('mac') ? '❌ ' : 'E')
let s:warning_sign = get(g:, 'coc_status_warning_sign', has('mac') ? '⚠️ ' : 'W')
let s:select_api = exists('*nvim_select_popupmenu_item')

function! coc#expandable() abort
  return coc#rpc#request('snippetCheck', [1, 0])
endfunction

function! coc#jumpable() abort
  return coc#rpc#request('snippetCheck', [0, 1])
endfunction

function! coc#expandableOrJumpable() abort
  return coc#rpc#request('snippetCheck', [1, 1])
endfunction

function! coc#refresh() abort
  if pumvisible()
    let g:coc#_context['candidates'] = []
    call feedkeys("\<Plug>CocRefresh", 'i')
  endif
  return "\<c-r>=coc#start()\<CR>"
endfunction

function! coc#on_enter()
  if !coc#rpc#ready()
    return ''
  endif
  call coc#rpc#request('CocAutocmd', ['Enter', bufnr('%')])
  return ''
endfunction

function! coc#_insert_key(method, key, ...) abort
  if get(a:, 1, 1)
    call coc#_cancel()
  endif
  return "\<c-r>=coc#rpc#".a:method."('doKeymap', ['".a:key."'])\<CR>"
endfunction

function! coc#_complete() abort
  let items = get(g:coc#_context, 'candidates', [])
  call complete(
        \ g:coc#_context.start + 1,
        \ items)
  return ''
endfunction

" hack method to avoid vim flicking
function! coc#_reload()
  if &paste | return | endif
  let items = get(g:coc#_context, 'candidates', [])
  call feedkeys("\<Plug>CocRefresh", 'i')
endfunction

function! coc#_do_complete(start, items)
  let g:coc#_context = {
        \ 'start': a:start,
        \ 'candidates': a:items,
        \}
  if mode() =~# 'i'
    call feedkeys("\<Plug>CocRefresh", 'i')
  endif
endfunction

function! coc#_select_confirm()
  let hasSelected = coc#rpc#request('hasSelected', [])
  if hasSelected | return "\<C-y>" | endif
  return "\<down>\<C-y>"
endfunction

function! coc#_selected()
  if !pumvisible() | return 0 | endif
  return coc#rpc#request('hasSelected', [])
endfunction

function! coc#_hide() abort
  if !pumvisible() | return | endif
  call feedkeys("\<C-e>", 'in')
endfunction

function! coc#_cancel()
  for winnr in range(1, winnr('$'))
    let popup = getwinvar(winnr, 'popup')
    if !empty(popup)
      exe winnr.'close!'
    endif
  endfor
  if pumvisible()
    let g:coc#_context['candidates'] = []
    call feedkeys("\<Plug>CocRefresh", 'i')
  endif
endfunction

function! coc#_select() abort
  if !pumvisible() | return | endif
  call feedkeys("\<C-y>", 'in')
endfunction

function! coc#start(...)
  if !get(g:, 'coc_enabled', 0)
    return ''
  endif
  let opt = coc#util#get_complete_option()
  call CocActionAsync('startCompletion', extend(opt, get(a:, 1, {})))
  return ''
endfunction

" used for statusline
function! coc#status()
  let info = get(b:, 'coc_diagnostic_info', {})
  let msgs = []
  if get(info, 'error', 0)
    call add(msgs, s:error_sign . info['error'])
  endif
  if get(info, 'warning', 0)
    call add(msgs, s:warning_sign . info['warning'])
  endif
  return s:trim(join(msgs, ' ') . ' ' . get(g:, 'coc_status', ''))
endfunction

function! s:trim(str)
  if exists('*trim')
    return trim(a:str)
  endif
  return substitute(a:str, '\s\+$', '', '')
endfunction

function! coc#config(section, value)
  let g:coc_user_config[a:section] = a:value
  call coc#rpc#notify('updateConfig', [a:section, a:value])
endfunction

function! coc#add_extension(...)
  if a:0 == 0 | return | endif
  call extend(g:coc_global_extensions, a:000)
  if get(g:, 'coc_enabled', 0)
    call coc#rpc#notify('installExtensions', [])
  endif
endfunction

function! coc#_watch(key)
  if s:is_vim | return | endif
  if index(s:watched_keys, a:key) == -1
    call add(s:watched_keys, a:key)
    call dictwatcheradd(g:, a:key, function('s:GlobalChange'))
  endif
endfunction

function! coc#_unwatch(key)
  if s:is_vim | return | endif
  let idx = index(s:watched_keys, a:key)
  if idx != -1
    call remove(s:watched_keys, idx)
    call dictwatcherdel(g:, a:key, function('s:GlobalChange'))
  endif
endfunction

function! s:GlobalChange(dict, key, val)
  call coc#rpc#notify('GlobalChange', [a:key, get(a:val, 'old', v:null), get(a:val, 'new', v:null)])
endfunction

function! coc#_map()
  if !s:select_api | return | endif
  for i in range(1, 9)
    exe 'inoremap <buffer> '.i.' <C-R>=nvim_select_popupmenu_item('.(i - 1).', v:true, v:true, {})<CR>'
  endfor
endfunction

function! coc#_unmap()
  if !s:select_api | return | endif
  for i in range(1, 9)
    exe 'iunmap <buffer> '.i
  endfor
endfunction

function! coc#_init()
  if exists('#User#CocNvimInit')
    doautocmd User CocNvimInit
  endif
endfunction
