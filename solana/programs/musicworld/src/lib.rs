use anchor_lang::prelude::*;

declare_id!("4EZwg9nu8McPtJv6cFMxtjqr6oo8M85RrwzstbQ9pr83");

//Added changes

#[program]
pub mod musicworld {
  use super::*;
  pub fn start_stuff_off(ctx: Context<StartStuffOff>) -> Result <()> {
    let base_account = &mut ctx.accounts.base_account;
    base_account.total_songs = 0;
    Ok(())
  }

  // The function now accepts a gif_link param from the user. We also reference the user from the Context
  pub fn add_song(ctx: Context<AddSong>, song_link: String, song_name: String) -> Result <()> {
    let base_account = &mut ctx.accounts.base_account;
    let user = &mut ctx.accounts.user;

	// Build the struct.
    let item = ItemStruct {
      song_link: song_link.to_string(),
      song_name: song_name.to_string(),
      user_address: *user.to_account_info().key,
    };
		
	// Add it to the gif_list vector.
    base_account.song_list.push(item);
    base_account.total_songs += 1;
    Ok(())
  }
}

#[derive(Accounts)]
pub struct StartStuffOff<'info> {
  #[account(init, payer = user, space = 9000)]
  pub base_account: Account<'info, BaseAccount>,
  #[account(mut)]
  pub user: Signer<'info>,
  pub system_program: Program <'info, System>,
}

// Add the signer who calls the AddGif method to the struct so that we can save it
#[derive(Accounts)]
pub struct AddSong<'info> {
  #[account(mut)]
  pub base_account: Account<'info, BaseAccount>,
  #[account(mut)]
  pub user: Signer<'info>,
}

// Create a custom struct for us to work with.
#[derive(Debug, Clone, AnchorSerialize, AnchorDeserialize)]
pub struct ItemStruct {
    pub song_link: String,
    pub song_name: String,
    pub user_address: Pubkey,
}

#[account]
pub struct BaseAccount {
    pub total_songs: u64,
	// Attach a Vector of type ItemStruct to the account.
    pub song_list: Vec<ItemStruct>,
}