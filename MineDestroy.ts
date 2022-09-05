// import { ArrayExtensions, EventsSDK, LocalPlayer, Menu, TickSleeper, Unit } from "github.com/octarine-public/wrapper/wrapper/Imports"

// const entry = Menu.AddEntry("Utility")
// const menu = entry.AddNode("Mine Destroyer", "panorama/images/spellicons/techies_land_mines_png.vtex_c", undefined, 0)
// const menuState = menu.AddToggle("State")

// const mines: Unit[] = [] // C_DOTA_NPC_TechiesMines
// const AttackSleeper = new TickSleeper()

// EventsSDK.on("EntityCreated", ent => {
// 	if (ent.ClassName === "CDOTA_NPC_TechiesMines")
// 		mines.push(ent as Unit)
// })

// EventsSDK.on("EntityDestroyed", ent => {
// 	if (ent.ClassName === "CDOTA_NPC_TechiesMines")
// 		ArrayExtensions.arrayRemove(mines, ent)
// })

// EventsSDK.on("Tick", () => {
// 	if (!menuState.value || AttackSleeper.Sleeping)
// 		return

// 	const hero = LocalPlayer!.Hero

// 	if (hero === undefined || !hero.IsAlive || hero.IsChanneling || hero.IsInFadeTime)
// 		return

// 	const mine = mines.find(mine_ =>
// 		mine_.IsEnemy()
// 		&& mine_.IsAlive
// 		&& hero.CanAttack(mine_)
// 		&& mine_.IsInRange(hero /**attack range */)
// 		&& mine_.Name === "npc_dota_techies_land_mine",
// 	)
// 	if (mine !== undefined) {
// 		hero.AttackTarget(mine)
// 		AttackSleeper.Sleep(100)
// 	}
// })

// EventsSDK.on("GameEnded", () => AttackSleeper.ResetTimer())
