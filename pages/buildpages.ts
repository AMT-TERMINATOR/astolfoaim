import * as fs from 'fs';
import * as path from 'path';
const luamin = require('luamin')
const f = (...p:string[])=>path.resolve(__dirname,...p)
if (!fs.existsSync('_pages')) fs.mkdirSync('_pages')
fs.readdirSync(f('..', 'script')).forEach(v => fs.writeFileSync(f('_pages', v), (v.endsWith('.lua') ? (a: string) => `-- AstolfoAim @ ${fs.readFileSync(f('..','.git',fs.readFileSync(f('..','.git','HEAD'),'utf-8').replace('ref: ','').trim()),'utf-8').trim()}
-- AGPLv3 | https://github.com/YieldingExploiter/astolfoaim/blob/main/script/${v}
---------------------------------------------------------------------------------------
--[=[
  AstolfoAim - A Free & Open-Source Pure-Lua Roblox Aimbot Script
  Copyright (C) 2022 YieldingExploiter

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as
  published by the Free Software Foundation, either version 3 of the
  License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
]=]

${luamin.minify(a)}`: (a: string) => a)(fs.readFileSync(f('..', 'script', v), 'utf-8'))))
fs.readdirSync(f('base')).forEach(v => fs.copyFileSync(f('base', v), f('_pages', v)))
